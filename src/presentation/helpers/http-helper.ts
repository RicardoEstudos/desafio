import { HttpResponse } from '@/presentation/contratos/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const created = (): HttpResponse => ({
  statusCode: 201,
  body: {}
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: {}
})

export const notFound = (): HttpResponse => ({
  statusCode: 404,
  body: {}
})