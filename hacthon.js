
const input = require('readline-sync')
// const { readlinkSync } = require('fs')
// const { Console } = require('console')
// const { FORMERR } = require('dns')
    function response(url){
    const axios = require('axios')
    let response = axios.get(url)
    return(response)
}

url= 'https://saral.navgurukul.org/api/courses'
// response();
console.log(response(url))
var dataresponse=response(url)

const course_and_id_data=(async(courses) => {
    try{
    
        let cousre = await(courses)
        allcoursesData=(cousre['data']['availableCourses'])
        // console.log(allcoursesData)
        count = 0
        coursesid_list=[]
        for(var i of allcoursesData){
            console.log(count, i['name'], i['id'])
            coursesid_list.push(i['id'])
            count++;
        }
        return(coursesid_list)
    }
    catch(err){
        console.log('something wrong')

    }
})
// console.log(course_and_id_data(dataresponse))
cousreAndId = course_and_id_data(dataresponse)

const getExercise = (async(courseId)=> {
    let coursesid_list = await(courseId)
    // console.log(coursesid_list)
    var user = input.question('select a course\n')
    courseDataId = coursesid_list[user]
    // console.log(courseDataId)
    for(index in allcoursesData){
        if((allcoursesData[index]['id']) == courseDataId){
            console.group(allcoursesData[index]['name'])
        var url2 = 'https://saral.navgurukul.org/api/courses/'+courseDataId+'/exercises'
        responseurl2 = response(url2)
        console.log(responseurl2)
        return responseurl2
        }
    }
})

url2Data = getExercise(cousreAndId)



const get_data_childExercise=(async(getExercise) =>{
    let responseurl2=await(getExercise)
    parentExcercise=responseurl2["data"]["data"]
    // console.log(parentExcercise)
    count = 0
    for(var counter in parentExcercise){
        console.log(count,parentExcercise[counter]["name"])
        children = parentExcercise[counter]["childExercises"]
        count_2=1
        for(var index in children ){
            console.log("   ",count_2,children[index]["name"])
            count_2++
        }
        count++
    }
    // console.log(parentExcercise)
})

get_data_childExercise(url2Data)
// console.log(url2Data)

const particular_parent=(async(getExercise) =>{
    let responseurl2=await(getExercise)
    my_list = []
    parentExcercise=responseurl2["data"]["data"]
    // console.log(parentExcercise)
    var user_1 = input.question('select a parent\n')
    console.log("    0",parentExcercise[user_1]["name"])
    children = parentExcercise[user_1]["childExercises"]
    count = 1
    for(var index in children ){
        console.log("   ",count,children[index]["name"])
        my_list.unshift(children[index]["name"])
        count++
    }
    children = parentExcercise[user_1]["childExercises"]
    var user = input.question('select a child\n')
    if(user==0){
        var slug = parentExcercise[user]["slug"]
    }else{
        var slug = children[user-1]["slug"]
    }
    var content= "https://saral.navgurukul.org/api/courses/"+courseDataId+"/exercise/getBySlug?slug="+slug
    responsee= response(content)
    return responsee

    
})
parent = particular_parent(url2Data)

const print_content=(async(data) => {
    let r=await(data)
    console.log(r["data"]["content"])
})
b=print_content(parent)

