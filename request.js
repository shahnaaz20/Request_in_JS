const request = require('request')
const { count } = require('console')

// request('https://saral.navgurukul.org/api/courses', { json: true }, (err, res, body) => {
//     if(err){
//         return err
//     }
//     else{
//         data = body['availableCourses']
//         // console.log(data)
//         for(var i = 0; i < data.length; i++){
//             console.log(i+1 + " " + data[i]['name'])
//         }
//     }
// })

request('https://saral.navgurukul.org/api/courses/74/exercises', { json: true }, (err, res, body) => {
    if(err){
        return err
    }
    else{
        count = body['data']
        console.log(count)
        // for(var i = 0; i < count.length; i++){
        //     console.log(i+1 + " " + count[i]['name'])
        // }
    }
})




// const content=(async(get_content) => {
//     let responseurl2=await(get_content)
//     my_list = []
//     parentExcercise=responseurl2["data"]["data"]
//     var user_1 = input.question('select a parent\n')
//     children = parentExcercise[user_1]["childExercises"]
//     var user = input.question('select a child\n')
//     if(user==0){
//         var slug = parentExcercise[user]["slug"]
//     }else{
//         var slug = children[user]["slug"]
//     }
//     console.log(slug)
// })
// var my_content=content(url2Data)
// // console.log(my_content)


// const content=(async(get_content) => {
//     let responseurl2=await(get_content)
//     my_list = []
//     parentExcercise=responseurl2["data"]["data"]
//     var user_1 = input.question('select a parent\n')
//     children = parentExcercise[user_1]["childExercises"]
//     var user = input.question('select a child\n')
//     if(user==0){
//         var slug = parentExcercise[user]["slug"]
//     }else{
//         var slug = children[user-1]["slug"]
//     }
//     var content= "https://saral.navgurukul.org/api/courses/"+courseDataId+"/exercise/getBySlug?slug="+slug
//     responsee= response(content)
//     return responsee

// })
// var my_content=content(url2Data)
// console.log(my_content)