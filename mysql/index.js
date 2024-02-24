import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
const app = express()
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test',
    port:"3300"
})
app.use(express.json())

app.use(cors())
// alter user 'root'@'localhost' identified with mysql_native_password by 'root'; (for auth prob or error)
app.get('/students',(req,res)=>{
    const q="select * from students";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })

})
app.get('/teachers',(req,res)=>{
    const q="select * from teachers";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})
app.get('/students/sample/:id',(req,res)=>{
    const sid=req.params.id;
    const q="select * from students where id= ?";
    const values=[
      sid
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })

})
app.get('/sections/:id',(req,res)=>{
    const id=req.params.id;
    const q="select * from teachersection where id= ?";
    const values=[
      id
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })

})

app.get('/teachers/sample/:sec',(req,res)=>{
    const sec=req.params.sec;
    const q="select distinct * from teachersection where section=?";
    const values=[
        sec
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/ratings',(req,res)=>{
    const q="select * from ratings";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })

})
app.get('/teachersuggestions/:id',(req,res)=>{
    const id1=req.params.id;
    const q="select * from suggestions where tid = (?)";
    const values=[
       id1
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })

})
app.get('/studentsuggestions/:id',(req,res)=>{
    const id1=req.params.id;
    const q="select * from suggestions where sid = (?)";
    const values=[
       id1
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })

})
app.post('/records',(req,res)=>{
    const q="insert into suggestions values(?)";
    const values=[
        req.body.sid,
        req.body.tid,
        req.body.sug,
        req.body.section
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("hello created!!!!!!!!")
    })
})

app.put('/records/:id',(req,res)=>{
    const sid=req.params.id;
    var s="students";
    if(sid.startsWith('T')){
     s="teachers";
    }
    const q="update "+s+" set pass=? where id=?";
    const values=[
        req.body.pass
    ];
    db.query(q,[...values,sid],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.post('/admin/teachersection',(req,res)=>{
    const q="insert into teachersection values (?)";
    const values=[
        req.body.id,
        req.body.sec
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("hello created!!!!!!!!")
    })
})
app.post('/admin/students',(req,res)=>{
     const q="insert into students values (?)";
     const values=[
         req.body.id,
         "123",
         req.body.sec
     ];
     db.query(q,[values],(err,data)=>{
         if(err) return res.json(err);
         return res.json("hello created!!!!!!!!")
     })
 })
 app.post('/admin/teachers',(req,res)=>{
    const q="insert into teachers values (?)";
    const values=[
        req.body.id,
        "123"
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("hello created!!!!!!!!")
    })
})
app.put('/ratings/:id',(req,res)=>{
    const tid=[req.params.id];
    const q="update ratings set "+ req.body.rat+ "= "+ req.body.rat+ "+1 where tid = ?";
    db.query(q,[tid],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.put('/del/students',(req,res)=>{
    const q="delete from students where id = ?";
    const values=[
        req.body.id
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.put('/del/teachers',(req,res)=>{
    const q="delete from teachers where id = ?";
    const values=[
        req.body.id
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.put('/del/teachersection',(req,res)=>{
    const q="delete from teachersection where id = ?";
    const values=[
        req.body.id
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.listen(8900,()=>{
    console.log("connected!!");
})