
const elSchoolList = document.getElementById("schoollist")
const elStateCode = document.getElementById("stateCode")
const urlFront = "https://api.schooldigger.com/v1.2/rankings/schools/"
const urlBack = "?appID=c570c8aa&appKey=54faff30e8a6aebeb6804c69379ebd23"

function findSchools() {
    elSchoolList.innerHTML = ""
    let stateId = elStateCode.value
    let url = urlFront+stateId+urlBack
    console.log(url)
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            let goodData = JSON.parse(this.responseText)
            let listOfSchools = goodData.schoolList

            for(school in listOfSchools){
                console.log(listOfSchools[school].schoolName)
                let node = document.createElement("LI")
                let textNode = document.createTextNode(listOfSchools[school].schoolName)
                node.appendChild(textNode)
                elSchoolList.appendChild(node)
    
    
            }

        }
    }
    xhttp.open("GET", url, true)
    xhttp.send()
}

