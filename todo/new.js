function out(){
    count=0
    return function inner(){
        count+=1;
        console.log(count)
    }
}

const clos=out()
clos()
clos()
clos()
