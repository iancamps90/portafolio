import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, sessionId, timestamp } = body ?? {}
    
    const response = await fetch(
      'https://n8n-production-588a.up.railway.app/webhook/e67166f8-cc0a-42b3-a02b-c03662f2a6c1/chat',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatInput: message,
          sessionId,
          timestamp: timestamp ?? new Date().toISOString(),
          source: 'iancamps.dev',
        })
      }
    )

    // Intentar parsear JSON, si falla devolvemos texto plano
    let payload: any
    const text = await response.text()
    try {
      payload = JSON.parse(text)
    } catch {
      payload = { output: text }
    }

    // Normalizamos a { message: string }
    const normalized = {
      message: payload?.output ?? payload?.message ?? text,
    }

    return NextResponse.json(normalized, {
      status: response.ok ? response.status : 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    })
  } catch (error) {
    console.error('Error en chat API:', error)
    return NextResponse.json(
      { error: 'Error al procesar el mensaje' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    }
  )
}

