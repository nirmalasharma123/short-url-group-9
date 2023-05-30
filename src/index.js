// const express = require('express');
// const route = require('./routes/route.js');
// const bodyParser = require("body-parser");
// const app = express();
// const cors = require("cors")
// const mongoose = require('mongoose');


// app.use(express.json());
// app.use(cors())
// mongoose.set("strictQuery", false);
// mongoose.connect("mongodb+srv://Chetan_ProjectClustor:PNr1Fn8OcRu2cGmk@project1.h4p8xqh.mongodb.net/group9Database", { useNewUrlParser: true })
//     .then(() => console.log("Mongo db is connected"))
//     .catch(err => console.log(err))
// app.use('/', route);

// app.listen(3001, function () {
//     console.log('Express app running on port ' + 3001)
// });
class Solution 
{
    //Function to find minimum time required to rot all oranges. 
    orangesRotting(grid)
    {
        let ct=0, res=-1;
        
        //queue to store cells which have rotten oranges.
        let q = new Array();
        let dir= new Array(new Array(-1, 0), new Array(1, 0), new Array(0, -1), new Array(0, 1));
        
        //traversing over all the cells of the matrix.
        for(let i=0;i<grid.length;i++) 
        {
            for(let j=0;j<grid[0].length;j++)
            {
                //if grid value is more than 0, we increment the counter.
                if(grid[i][j]>0)
                    ct++;
                    
                //if grid value is 2, we push the cell indexes into queue.
                if(grid[i][j]==2) 
                    q.push(new Array(i, j));
            }
        }
        let l=0;
        while(q.length>l) 
        {
            //incrementing result counter.
            res++;
            let size=q.length-l;
            for(let k=0;k<size;k++) 
            {
                //popping the front element of queue and storing cell indexes.
                let cur=q[l];
                ct--;
                l++;
                
                //traversing the adjacent vertices.
                for(let i=0;i<4;i++)
                {
                    let x=cur[0]+dir[i][0], y=cur[1]+dir[i][1];
                    
                    //if cell indexes are within matrix bounds and grid value
                    //is not 1, we continue the loop else we store 2 in current
                    //cell and push the cell indexes in the queue.
                    if(x>=grid.length||x<0||y>=grid[0].length||y<0||grid[x][y]!=1)
                        continue;
                    grid[x][y]=2;
                    q.push(new Array(x, y));
                }
            }
        }
        //returning the minimum time.
        if(ct==0) 
            return Math.max(0, res);
        return -1;
    }
}