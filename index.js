
const elSchoolList = document.getElementById("schoollist")
const url = "https://api.schooldigger.com/v1.2/rankings/schools/GA?appID=c570c8aa&appKey=54faff30e8a6aebeb6804c69379ebd23"

function findSchools() {
    var xhttp = new XMLHttpRequest()
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

