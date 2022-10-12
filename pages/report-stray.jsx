import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import TopBar from "../components/TopBar";

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
            <TopBar />

            <div className=" flex flex-col items-center ">
                <div className="info my-4 max-w-[625px]">
                    <h1 id="title">Report any Critical stray animal to the nearest Animal Care centres</h1>
                    <p id="description">The details you provide with this form will be used to reach the nearest authority at the
                        location of the stray animal.</p>
                </div>
                <form className="flex flex-col  md:w-2/3 max-w-[775px] w-auto sm:mx-6 mx-2" id="survey-form"
                      action="https://formspree.io/f/xayaokzl" method="POST">
                    <div className="form-group mb-2">
                        <label for="name">Name
                            <span className="hint text-red-600">*</span>
                        </label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group mb-2">
                        <label for="email">Email
                            <span className="hint text-red-600">*</span>
                        </label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group mb-2">
                        <label for="address">
                            Address(street address,City, pin code)
                            <span className="hint text-red-600">*</span>
                        </label>
                        <input type="address" name="first address" id="first address" className="form-control"
                               placeholder="Enter your correct address (eg. Meenawati marg, Lucknow, 209087)" required/>
                    </div>
                    <div className="form-group mb-2">
                        <label for="landmark">
                            Landmark
                            <span className="hint text-red-600">*</span>
                        </label>
                        <input type="address" min="1" name="address" id="address" className="form-control"
                               placeholder="Enter the nearest landmark to identify the location." required/>
                    </div>
                    <div className="form-group mb-2">
                        <label for="contact-no">
                            Contact number
                            <span className="hint text-red-600">*</span>
                        </label>
                        <input type="tel" name="contact-no" id="contact" className="form-control"
                               placeholder="Enter an active contact number" required/>
                    </div>
                    <div className="form-group mb-4">
                        <label for="email">Which type of stray animal?
                            <span className="hint text-red-600">*</span>
                        </label>
                        <select id="dropdown" name="role" className="form-control" required>
                            <option disabled selected value>Select stray animal</option>
                            <option value="student">Dog</option>
                            <option value="artist">Cat</option>
                            <option value="graphic_designer">Cow</option>
                            <option value="other">Pig</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>What is the condition of the animal currently?</label>
                        <label>
                            <input name="user-recommend" value="definitely" type="radio" className="input-radio" checked />
                            Extremely Critical
                        </label>
                        <label>
                            <input name="user-recommend" value="maybe" type="radio" className="input-radio" />
                            Critical
                        </label>
                        <label>
                            <input name="user-recommend" value="no" type="radio" className="input-radio" />
                            Moderate health
                        </label>
                    </div>


                    <div className="form-group mt-2">
                        <label for="comment">Would you like to share any additional information about the stray animal&apos;s
                            condition?</label>
                        <textarea id="comment" className="input-textarea focus:outline-green-400 border-2 border-gray-200" name="comment"
                                  placeholder="Enter your comment here..."></textarea>
                    </div>

                    <div className="form-group text-white">
                        <button type="submit" id="submit"
                                className="block w-full h-min text-center bg-green-500 hover:bg-green-600 my-px p-3 rounded">Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default ReportStrays
