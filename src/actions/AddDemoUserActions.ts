'use server'
import { prisma } from '@/lib/prisma'

export async function addDemoUser(formData: FormData) {
  await prisma.demo.create({
    data: {
      businessName: formData.get('businessName') as string,
      managerName: formData.get('managerName') as string,
      phone: formData.get('phone') as string,
      zip: formData.get('zip') as string,
    },
  })
}
