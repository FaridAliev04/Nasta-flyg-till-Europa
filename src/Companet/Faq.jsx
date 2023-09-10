import * as React from 'react';
import { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { faqData } from '../Data/Faq';
import langMode from '../LangMode';
import { faqDataEng } from '../Data/Faq';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Faq() {
  const [langData,setLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)
  const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?faqData:faqDataEng)
  return (
    <div className='faq'>
        <h1 className='fag_header'>{langData.fag.fagHeader}</h1>
         {myLangData.map((e)=>{
     return <Accordion key={e.id} >
       
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
             <Typography>{e.question}</Typography>
          
        </AccordionSummary>
   
        <AccordionDetails> 
          <Typography>
            {e.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    })}
    </div>
  );
}