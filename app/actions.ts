'use server'

import { Contact } from '@prisma/client'
import prisma from './db'
import { Prisma } from '@prisma/client'
import { Stack } from './types/Stack'

//contact actions
export async function addContact(data: Omit<Contact, 'id'>) {
    try {
        await prisma.contact.create({
            data: data
        })
        return { message: 'contact created successfully' }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                const fieldList = (error.meta?.target as string[]) || [] // Récupère le tableau qui contient le champ spécifique qui a violé la contrainte d'unicité
                if (fieldList.includes('typ')) {
                    throw new Error('this type already exists in data base')
                } else if (fieldList.includes('link')) {
                    throw new Error('this link already exists in data base')
                }
            }
        }
        // pour declencher une erreur
        throw new Error('Internal server error')
    }
}
export async function getContacts() {
    try {
        const contacts = await prisma.contact.findMany()
        return contacts
    } catch (error) {
        throw new Error('Internal server error')
    }
}
export async function getContact(id: number) {
    try {
        const contact = await prisma.contact.findUnique({
            where: {
                id: id
            }
        })
        if (contact === null) {
            throw new Error('contact not found')
        }
        return contact
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                throw new Error('contact not found')
            }
        }
        throw new Error('Internal server error')
    }
}
export async function deleteContact(id: number) {
    try {
        await prisma.contact.delete({
            where: {
                id: id
            }
        })
        return { message: 'deleted successfuly' }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2025") {
                throw new Error('contact not found , cannot deleted')
            }
        }
        throw new Error('Internal server error')
    }
}
export async function updateContact(id: number, data: Omit<Contact, 'id'>) {
    try {
        await prisma.contact.update({
            where: {
                id: id
            },
            data: data
        })
        return { message: 'contact updated successfuly' }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2025") {
                throw new Error('contact not found, cannot updated')
            } else if (error.code === 'P2002') { // violation d'une contrainte d'unicite
                const fieldList = (error.meta?.target as string[]) || []
                if (fieldList.includes('typ')) {
                    throw new Error('this type already exists in data base')
                } else if (fieldList.includes('link')) {
                    throw new Error('this link already exists in data base')
                }
            }
        }
        throw new Error('Internal server error')
    }
}

// stack actions
export async function addStack(stack: Omit<Stack, 'id'>) {
    try {
        await prisma.stack.create({
            data: stack
        })
        return { message: 'stack created successfuly' }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                throw new Error('This name already exists in data base')
            }
        }
        throw new Error('Internal server error')
    }
}
export async function getStacks() {
    try {
        const stacks = await prisma.stack.findMany()
        return stacks
    } catch (error) {
        throw new Error('Internal server error')
    }
}
export async function updateStack(id: number, stack: Omit<Stack, 'id'>) {
    try {
        await prisma.stack.update({
            where: { id: id },
            data: stack
        })
        return { message: 'updated successfuly' }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                throw new Error('This nale already exists in data base')
            }
        }
        throw new Error('Internal server error')
    }
}
export async function deleteStack(id: number) {
    try {
        await prisma.stack.delete({
            where: { id: id }
        })
        return { message: 'deleted successfuly' }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2025") {
                throw new Error('stack not found , cannot deleted')
            }
        }
        throw new Error('Internal server error')
    }
}
