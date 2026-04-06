import React, { useState, useEffect } from 'react'

function Ques() {
    const [fetchques, setFetchQues] = useState([]);
    const [fetchdata, setFetchData] = useState(0);
    const [answer, setAnswer] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://exam-portal-q6qe.onrender.com/ques');
                const data = await response.json();
                setFetchQues(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();

    }, [])

    function nextbtn() {
        if (fetchdata < fetchques.length - 1) {
            setFetchData(fetchdata + 1);
        }
    }

    function prevbtn() {
        if (fetchdata > 0) {
            setFetchData(fetchdata - 1);
        }
    }
    console.log(answer)

    return (
        <>
            {/*----------------------------------------- Fetched Questions------------------------------------------------------- */}
            <div>
                <div className="p-4 border-2 border-gray-400 rounded-lg bg-gray-100 w-full min-h-screen">
                    <div className="flex flex-col items-center justify-center gap-4 p-4">
                        <h1 className="text-2xl font-bold">JavaScript Questions</h1>

                        {fetchques.length > 0 ? (
                            <div className="w-full max-w-xl bg-white p-4 rounded shadow">
                                <h2  className="text-lg font-semibold">
                                    <strong>Question {fetchdata + 1}: </strong>
                                    {fetchques[fetchdata].question}
                                </h2>

                                <div className="mt-2">
                                    <strong>Options:</strong>

                                    <div className="flex flex-col gap-2 mt-2">
                                        {fetchques[fetchdata].option.split("  ").map((opt, index) => (
                                            <label key={index} className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="option"
                                                    value={opt}
                                                    onChange={(e) => setAnswer(e.target.value)}
                                                />
                                                {opt} 
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-4">


                                    <button
                                        onClick={prevbtn}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Prev
                                    </button>

                                    <button
                                        onClick={nextbtn}
                                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p>Loading questions...</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ques