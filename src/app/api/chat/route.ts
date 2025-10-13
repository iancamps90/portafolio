import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const response = await fetch(
      'https://n8n-production-588a.up.railway.app/webhook/4c3c328d-19fa-4092-83f6-3fdf0f41f561/chat',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }
    )

    const data = await response.json()
    
    return NextResponse.json(data, {
      status: 200,
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

