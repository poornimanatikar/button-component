import styles from './ButtonLayout.module.scss';
import ButtonContainer from '../ButtonContainer/ButtonContainer';

const rows_1 = [{
    heading:'<Button />',
    title:'Default'
},{
    heading:'&:hover, &:focus',
    title:'Default'
}];
const rows_2 =[{
  heading:'<Button variant="outline"/>',
  title:'Default',
  color:'primary',
  variant:'outline',
  size:'md'
},{
    heading:'&:hover, &:focus',
    title:'Default',
    color:'primary',
    variant:'outline',
    size:'md'
}
];
const rows_3 =[
    {
     heading:'<Button variant="text"/>',
     title:'Default',
     color:'primary',
     variant:'text',
     size:'md'   
    },{
        heading:'&:hover, &:focus',
        title:'Default',
        color:'primary',
        variant:'text',
        size:'md'
    }
];
const rows_4 =[{
    heading:'<Button size="sm />',
    color:'primary',
    title:'Default',
    size:'sm',
},{
    heading:'<Button size="md"/>',
    color:'primary',
    title:'Default',
    size:'md'
},{
    heading:'<Button size="lg"/>',
    color:'primary',
    title:'Default',
    size:'lg'
}]
const rows_5 =[{
    heading:'<Button color="default"/>',
    title:'Default'
},
{
    heading:'<Button color="primary"/>',
    color:'primary',
    title:'Default'
},
{
    heading:'<Button color="secondary"/>',
    color:'secondary',
    title:'Default'
},
{
    heading:'<Button color="danger"/>',
    color:'danger',
    title:'Default'
},
];
const rows_6 =[{
    heading:'&:hover, &:focus',
    title:'Default'
},
{
    heading:'&:hover, &:focus',
    color:'primary',
    title:'Default'
},
{
    heading:'&:hover, &:focus',
    color:'secondary',
    title:'Default'
},
{
    heading:'&:hover, &:focus',
    color:'danger',
    title:'Default'
},
]
const rows_7 =[{
    heading:'<Button startIcon="local_grocery_store"/>',
    color:'primary',
    title:'Default',
    frontIcon:'local_grocery_store'
},
{
    heading:'<Button endIcon="local_grocery_store"/>',
    color:'primary',
    title:'Default',
    backIcon:'local_grocery_store'
}   
]
const rows_8=[{
    heading:'<Button disabled/>',
    title:'Default',
    disabled:true,
},{
    heading:'<Button variant="text" disabled/>',
    title:'Default',
    disabled:true,
    variant:'text'
}]
const rows_9=[{
    heading:'<Button disableShadow/>',
    title:'Default',
    color:'primary',
    disableShadow:true
}]
const ButtonLayout= () => {
   
    return <div className={styles.wrapper}>
     <ButtonContainer rows={rows_1} />
     <ButtonContainer rows={rows_2} />
     <ButtonContainer rows={rows_3}/>
     <ButtonContainer rows={rows_8}/>
     <ButtonContainer rows={rows_9}/>
     <ButtonContainer rows={rows_7}/>
     <ButtonContainer rows={rows_4}/>  
     <ButtonContainer rows={rows_5}/>
     <ButtonContainer rows={rows_6}/>
     <div className={styles.footer}>Poornima Natikar @ DevChallenges.io</div>
    </div>
    
}

export default ButtonLayout;