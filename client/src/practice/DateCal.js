import React, { useState } from 'react'

const DateCal = () => {
    const [date , setDate]=useState('')
    const onChangeDate=(e)=>{
        setDate({...date,[e.target.name]:e.target.value})
        
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
    }
    return (
        <div style={{ textAlign: 'center' }}>
            {/* <h1> birthdate : {date} </h1> */}
            hello from DateCal
            <br />
            <br />
            <br />
            <form >
                <input type="date" id="start" name='date'                    
                 onChange={onChangeDate}  />
                    <button onClick={()=>handleSubmit()}>Submit</button>
            </form>

            
        </div>
    )
}

export default DateCal