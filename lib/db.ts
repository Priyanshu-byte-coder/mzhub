import { MongoClient, Db } from 'mongodb'

// Validate environment variable exists
if (!process.env.COSMOS_DB_CONNECTION_STRING) {
    console.warn('Warning: COSMOS_DB_CONNECTION_STRING is not set')
}

const connectionString = process.env.COSMOS_DB_CONNECTION_STRING || ''
const dbName = 'mzhub'

// Connection options for Azure Cosmos DB
const options = {
    tls: true,
    retryWrites: false, // Cosmos DB doesn't support retryWrites
    maxPoolSize: 10,
    minPoolSize: 1,
}

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

/**
 * Get a cached database connection for better performance
 * Uses connection pooling to reuse connections across requests
 */
export async function getDatabase(): Promise<Db> {
    // Return cached connection if available
    if (cachedClient && cachedDb) {
        return cachedDb
    }

    if (!connectionString) {
        throw new Error('COSMOS_DB_CONNECTION_STRING environment variable is not set')
    }

    try {
        // Create new MongoDB client
        const client = new MongoClient(connectionString, options)

        // Connect to the database
        await client.connect()

        // Cache the connection
        cachedClient = client
        cachedDb = client.db(dbName)

        console.log('Connected to Azure Cosmos DB')
        return cachedDb
    } catch (error) {
        console.error('Failed to connect to Azure Cosmos DB:', error)
        throw error
    }
}

/**
 * Contact interface for type safety
 */
export interface Contact {
    name: string
    email: string
    message: string
    createdAt: Date
    source: string
    ipAddress?: string
    userAgent?: string
}

/**
 * Save a contact to the database
 */
export async function saveContact(contact: Omit<Contact, 'createdAt'>): Promise<string> {
    const db = await getDatabase()
    const collection = db.collection<Contact>('contacts')

    const result = await collection.insertOne({
        ...contact,
        createdAt: new Date(),
    })

    return result.insertedId.toString()
}

/**
 * Get all contacts (for admin purposes)
 */
export async function getContacts(limit: number = 50): Promise<Contact[]> {
    const db = await getDatabase()
    const collection = db.collection<Contact>('contacts')

    return collection
        .find({})
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray()
}
