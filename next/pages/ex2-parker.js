import { useState } from "react"
import Head from 'next/head'

export default function Calculator() {
    const [value, setValue] = useState()

    const handleClick = event => {
        event.preventDefault()
        let solution = 0;
        let a = Number(event.target.a.value)
        let b = Number(event.target.b.value)

        switch (event.target.operation.value) {
            case '+':
                solution = a + b
                break
            case '-':
                solution = a - b
                break
            case '*':
                solution = a * b
                break
            case '/':
                solution = a / b
                break
        }
        setValue(solution)
    }

    return (
        <>
            <Head>
                <title>Calculator</title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-1">Calculator</h1>
                    </div>
                </div>
                <form onSubmit={handleClick} className="row mb-5">
                    <div className="col">
                        <input id="a" name="a" className="form-control form-control-lg" type="number"
                               aria-describedby="numberHelpA" required/>
                        <div id="numberHelpA" className="form-text">First Number</div>
                    </div>
                    <div className="col">
                        <select id="operation" name="operation" className="form-select form-select-lg" required>
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                        </select>
                    </div>
                    <div className="col">
                        <input id="b" name="b" className="form-control form-control-lg" type="number"
                               aria-describedby="numberHelpB" required/>
                        <div id="numberHelpB" className="form-text">Second Number</div>
                    </div>
                    <div className="col">
                        <button className="btn btn-lg btn-secondary" type="submit">Solve</button>
                    </div>
                </form>
                { value
                    ? <div className="row">
                        <div className="col">
                            <blockquote className="blocquote">{value}</blockquote>
                            <footer className="blockquote-footer">Solved by: <strong>You're computer</strong></footer>
                        </div>
                    </div>
                    : <div className="row">
                        <div className="col">
                            <blockquote className="blocquote">Enter you're problem</blockquote>
                            <footer className="blockquote-footer">Solved by: <strong>You're computer</strong></footer>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}