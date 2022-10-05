import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ReportStrays = () => {
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <>
            <Head>
                <title>Report Strays</title>
            </Head>
            <div>

            </div>
        </>
    )
}

export default ReportStrays
