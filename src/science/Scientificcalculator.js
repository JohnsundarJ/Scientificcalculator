import React, { Component } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    display: 'block',
    backgroundColor: 'white'
  },
  eachac: {
    width: '25%',
    height: '50px',
    fontSize: '25px',
    backgroundColor: 'pink',
    color: 'black'
  },
 
  each: {
    width: '25%',
    height: '50px',
    fontSize: '25px',
    backgroundColor: 'blue',
    color: ' white'
  },
  each2: {
    width: '25%',
    height: '52px',
    fontSize: '25px',
    backgroundColor: 'blue',
    color: ' white'
  },
 
  
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize:"25px"
  },
  textbox: {
    height: '60px',
    backgroundColor: '#bbb',
    width: '98%',
    fontSize:'25px',
    textAlign : 'right',
    marginLeft:'0px'
  }
});


class Scientificcalculator extends Component {
  state = {
    operand1:0,
    operand2:'',
    operand3:'',
    op:'',
    temp:0
  }
  fun1=(e)=>{
    if(this.state.operand1===0 || this.state.operand1===3.14 || (this.state.op!=="" && this.state.temp===1))
    {
        this.setState({
          temp:0,
          op:"",
    operand1:e.target.value
        });
    }
    else{
    this.setState({
        operand1:this.state.operand1+e.target.value
    })
}
};
fun2=(e)=>{
  if(this.state.op!=="" && this.state.temp===1)
  this.setState({
    op:"",
    operand1:3.14
})
else if((this.state.op!=="")){
  this.setState({
      operand1:this.state.operand1+3.14
  })
}
else{
  this.setState({
    operand1:3.14
})
}
};
operation=(e)=>{
  this.setState({
      operand2:this.state.operand1,
      op:e.target.value,
      operand1:''
  })
}
final=()=>{
  var t=0;
  // alert(this.state.op+"\n"+this.state.operand1);
  if(this.state.op!=="" && (this.state.operand2!=="" && (this.state.op==="x^y" && this.state.operand1!=="")))
  this.setState({
    temp:1
  })
  if(this.state.op==="sin")
  {
     this.setState({
      operand1:Math.sin(this.state.operand2)
     })
  }
  if(this.state.op==="cos")
  {
     this.setState({
      operand1:Math.cos(this.state.operand2)
     })
  }
  if(this.state.op==="tan")
  {
     this.setState({
      operand1:Math.tan(this.state.operand2)
     })
  }
  if(this.state.op==="sinh")
  {
     this.setState({
      operand1:Math.sinh(this.state.operand2)
     })
  }
  if(this.state.op==="cosh")
  {
     this.setState({
      operand1:Math.cosh(this.state.operand2)
     })
  }
  if(this.state.op==="tanh")
  {
     this.setState({
      operand1:Math.tanh(this.state.operand2)
     })
  }
  if(this.state.op==="log")
  {
     this.setState({
      operand1:Math.log(this.state.operand2)
     })
  }
  if(this.state.op==="sqrt")
  {
     this.setState({
      operand1:Math.sqrt(this.state.operand2)
     })
  }
  if(this.state.op==="pow2")
  {
     this.setState({
      operand1:Math.pow(this.state.operand2,2)
     })
  }
  if(this.state.op==="cube")
  {
     this.setState({
      operand1:Math.cbrt(this.state.operand2)
     })
  }
  if(this.state.op==="x^y")
  {
    if(this.state.operand1===""){
    t=1;
      alert("Select second operand");
    }
    else{
     this.setState({
       temp:1,
      operand1:Math.pow(this.state.operand2,this.state.operand1)
     })
    }
  }
  if(t!==1){
    this.setState({
    operand2:""
  })
}
}
plusminus=(e)=>{
  if((this.state.operand1[0])==='-')
  {
    this.setState({
      operand1:Math.abs(this.state.operand1)
  })
  }
  else{
  this.setState({
    operand1:-(this.state.operand1)
})
  }
}
powerten=()=>
{

  this.setState({
  temp:1,
  op:"powten",
    operand1:Math.pow(10,this.state.operand1)
    }) 
}
erase=()=>{
    this.setState({
        operand1:0
    })
}
onCero = () => {
  var sub=(this.state.operand1).toString();
  var minus=sub.substring(0,1);
  if(sub.length===2 && minus==="-")
  this.setState({
operand1:""
  })
  else{
  this.setState({
  operand1:sub.substring(0,sub.length-1)
  }) 
}
};
  render() {
    const { classes } = this.props;

    return (
      <div md={12} xs={12}>
        <div className={classes.root}>
          <AppBar position="fixed" color="secondary">
            <Toolbar>
              <Typography className={classes.title}>
               SCIENTIFIC CALCULATOR
                            </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div style={{ padding: "40px" }}>
          <Grid container>
            <Grid item md={4} />
            <Grid item md={4}>
              <Card style={{
                margin: "auto",
                boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.3)",
                "&:hover": {
                  boxShadow: "0 16px 30px 12.125px rgba(0,0,0,0.3)"
                }
              }}>
                <CardContent>

                  <input
                    className={classes.textbox} id="display" type="text" value={this.state.operand1} label="Firstname" />
                  <div className={classes.button}>
                    <button className={classes.each} value="C" id="C" onClick={(e)=>this.erase(e)}>C</button>
                    <button className={classes.each} value="&#177;" id="&#177;" onClick={(e)=>this.plusminus(e)}>&#177;</button>
                    <button className={classes.each} value="&#928;" id="&#928;" onClick={(e)=>this.fun2(e)}>&#928;</button>
                    <button className={classes.eachac} value="AC" id="AC" onClick={(e)=>this.onCero(e)}>AC</button>

                    <button className={classes.each} value="7" id="7" onClick={(e)=>this.fun1(e)}>7</button>
                    <button className={classes.each} value="8" id="8" onClick={(e)=>this.fun1(e)}>8</button>
                    <button className={classes.each} value="9" id="9" onClick={(e)=>this.fun1(e)}>9</button>
                    <button className={classes.each} value="sin" id="sin" onClick={(e)=>this.operation(e)}>sin</button>

                    
                    <button className={classes.each} value="4" id="4" onClick={(e)=>this.fun1(e)}>4</button>
                    <button className={classes.each} value="5" id="5" onClick={(e)=>this.fun1(e)}>5</button>
                    <button className={classes.each} value="6" id="6" onClick={(e)=>this.fun1(e)}>6</button>
                    <button className={classes.each} value="cos" id="cos" onClick={(e)=>this.operation(e)}>cos</button>

                    
                    <button className={classes.each} value="1" id="1" onClick={(e)=>this.fun1(e)}>1</button>
                    <button className={classes.each} value="2" id="2" onClick={(e)=>this.fun1(e)}>2</button>
                    <button className={classes.each} value="3" id="3" onClick={(e)=>this.fun1(e)}>3</button>
                    <button className={classes.each} value="tan" id="tan" onClick={(e)=>this.operation(e)}>tan</button>

                    <button className={classes.each} value="0" id="0" onClick={(e)=>this.fun1(e)}>0</button>
                    <button className={classes.each} value="." id="." onClick={(e)=>this.fun1(e)}>.</button>
                    <button className={classes.eachac} value="=" id="=" onClick={(e)=>this.final(e)}>=</button>
                    <button className={classes.each} value="log" id="log" onClick={(e)=>this.operation(e)}>log</button>
                    
                    
                    <button className={classes.each} value="sinh" id="sinh" onClick={(e)=>this.operation(e)}>sinh</button>
                    <button className={classes.each} value="cosh" id="cosh" onClick={(e)=>this.operation(e)}>cosh</button>
                    <button className={classes.each} value="tanh" id="tanh" onClick={(e)=>this.operation(e)}>tanh</button>
                    <button className={classes.each} value="10^x" id="10^x" onClick={(e)=>this.powerten(e)}>10^x</button>
                   
                    <button className={classes.each} value="sqrt" id="sqrt" onClick={(e)=>this.operation(e)}>&#8730;</button>
                    <button className={classes.each2} value="cube" id="cube" onClick={(e)=>this.operation(e)}>&#8731;</button>
                    <button className={classes.each} value="pow2" id="pow2" onClick={(e)=>this.operation(e)}>x^2</button>
                    <button className={classes.each} value="x^y" id="x^y" onClick={(e)=>this.operation(e)}>x^y</button>
                    
                   </div>                  
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Scientificcalculator);
