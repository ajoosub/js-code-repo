let arr = [1,20,30,40,61]

const newarr = arr.filter( (item) => {
    return item % !(2 == 0)   
} );
//console.log(newarr)

let arrnew=[]
arr.forEach( (item) => {
    arrnew.push(item/2);
    
} );
//console.log(arrnew)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let count=0 
let mybook = books.filter( (bk) => {
    //count+=1
    if (bk.genre === "History"){
        count+=1
    }
    return bk.genre === "History"
});

//console.log(mybook,count)

let pubdate = books.map( (bk) => {
    if (!bk.publish > 1987 && !bk.publish < 2009){
        return
    }
    else{
        return bk.publish
    }
    
} );
console.log(pubdate);