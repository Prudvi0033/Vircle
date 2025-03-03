import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Card className='flex flex-col items-center justify-center'>
      <CardHeader>
        <img src="https://imgs.search.brave.com/D9Dalr7D3huzo1D6ZsvPAKIIsrM9TzOUj8GpibPSeT8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGV0a2V5Lm9yZy9p/bWFnZXMvZG9nLnN2/Zw" width={40} height={40} alt="404" />
      </CardHeader>
      <Separator/>
      <CardContent className='flex flex-col mt-4 items-center'>
        <h2 className='text-3xl'>Oops! Page Not Found</h2>
        <p>Could not find requested resource</p>
        <Link className='text-blue-700 underline' href="/">Return Home</Link>
      </CardContent>
    </Card>
  )
}