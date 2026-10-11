const gobtn = document.getElementById("go")

const output = document.getElementById("output")
const out = document.getElementById("error")

const prefix = document.getElementById("prefix")
const startrange = document.getElementById("start")
const amount = document.getElementById("amount")
const next = document.getElementById("next")

gobtn.addEventListener("mousedown", ev=>{
    output.innerText = ""
    out.innerHTML = "loading..."

    let loopcount = Number(amount.value)

    if (isNaN(loopcount)) {
        out.innerHTML = "amount is not a number : '"+amount.value+"'"
        return
    }

    if (loopcount <= 0) {
        out.innerHTML = "amount is too small or not present"
        return
    }

    let start = Number(startrange.value)

    if (isNaN(start)) {
        out.innerHTML = "starting range is not a number : '"+startrange.value+"'"
        return
    }

    next.innerHTML = (start+loopcount).toString()

    try {
        for(var i = 0; i<loopcount; i++)
        {

            code = start+i+1
            code = code.toString()
            code = prefix.value+code
            
            const barcode = document.createElement("img")
            output.appendChild(barcode)
            barcode.src = "https://quickchart.io/barcode?type=code128&includeText=true&text="+code
            barcode.style.marginRight = "40px"
            barcode.style.marginBottom = "20px"
            barcode.style.width = "10vw"
        }
    } catch(error) {
        out.innerHTML = "internal error. check console for further details"
        console.log(error)
    }

    out.innerHTML = "done - no error"
})

const canhide = document.getElementById("canhide")

document.getElementById("print").addEventListener("mousedown", ev=>{
    window.alert("Select 'Landscape' mode for printing! If you select portrait, the barcodes will be too small to scan.")
    canhide.style.display = "none"
    print()
    window.alert("A guillotine can be used to seperate the barcodes.")
    setInterval(ev=>{
        canhide.style.display = "block"
    }, 400)
})