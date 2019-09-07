const Nicolas = {
    name: "Nicolas",
    age: 18,
    gender: "female"
};

const resolvers ={
    Query:{
        person: function(){
            return Nicolas;
        }
    }
}

export default resolvers;