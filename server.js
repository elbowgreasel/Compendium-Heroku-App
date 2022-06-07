const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let resourceTypes = {
    'General': {
        'FreeCodeCamp': 'https://www.freecodecamp.org/',
        'OdinProject': 'https://www.theodinproject.com/',
        'CS50': 'https://learning.edx.org/course/course-v1:HarvardX+CS50+X/home',
        'LearningtoLearn': 'https://www.coursera.org/learn/learning-how-to-learn',
        '100Devs': 'https://leonnoel.com/100devs/'
    },
    'HTML': {
        'Shay Howe': 'https://learn.shayhowe.com/html-css/building-your-first-web-page/',

    },
    'CSS':{
        'FlexboxZombies': 'https://mastery.games/flexboxzombies/'
    },
    'JS':{
        'Scrimba': 'https://scrimba.com/learn/learnjavascript'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:resource', (request, response) => {
    const resource = request.params.resource
    if(resourceTypes[resource]){
        response.json(resourceTypes[resource])
    }else{
        response.json(resourceTypes['General'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})