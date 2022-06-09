document.querySelector('button').addEventListener('click', getResidentData)

async function getResidentData(){
    const residentName = document.querySelector('input').value

    try{
        const response = await fetch(`https://resident-care-guide-api.herokuapp.com/api/${residentName}`)
        const data = await response.json()
        console.log(data)


        document.getElementById('ageResident').innerText = data.age
        document.getElementById('majorDiagnosisResident').innerText = data.majorDiagnosis
        document.getElementById('staffAwarenessResident').innerText = data.staffAwareness
        document.getElementById('foodTextureResident').innerText = data.foodTexture
        document.getElementById('fluidTextureResident').innerText = data.fluidTexture
        document.getElementById('fluidThicknerResident').innerText = data.fluidThicker
        document.getElementById('feedingAbilityResident').innerText = data.feedingAbility
        document.getElementById('mobilityResident').innerText = data.mobility
        document.getElementById('imageResident').src = data.image

    }catch(error){
        console.log(error)

    }
}