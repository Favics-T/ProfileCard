

const updateUTC= ()=>{
    let UTC = document.getElementById('UTC');

    //function for time update
    function updateTime(){
        const today = new Date();
        UTC.textContent = today.toUTCString();
    }

   updateTime();
    setInterval(updateTime,1000)
    }

updateUTC();
