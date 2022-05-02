let test1 = {

    project1: {
        task1: {
            title:'title1',
            desc:'desc1',
            date:'date1',
    },
        task2:{
            title:'title2',
            desc:'desc2',
            date:'date2',
    }
        },
    project2: {
        task1: {
            title:'title1',
            desc:'desc1',
            date:'date1',
        },
        task2:{
            title:'title2',
            desc:'desc2',
            date:'date2',
        }
            },
}
localStorage.setItem('test1', JSON.stringify(test1))
x = JSON.parse(localStorage.getItem('test1'))
x.project1.task1