import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textbox(props) {

  const handleUpperCase = () => {
    // console.log("Capitalize Button Clicked! -- " + text)
    // setText("Capitalize button clicked!") //we here changed the state of text when button was clicked!
    let capitalized_text;
    capitalized_text = text.toUpperCase()
    if (capitalized_text === text) 
    {
      // alert("Text is Already in UpperCase Notation!")
    }
    setText(capitalized_text)
    props.set_alert("Converted to Upper Case", "success")
  }
  const handleLowerCase = () => {
    let lowerCase_text;
    lowerCase_text = text.toLowerCase()
    if (text === lowerCase_text)
    {
      // alert("Text is Already in LowerCase Notation!")
    }
    setText(lowerCase_text)
    props.set_alert("Converted to Lower Case", "success")
  }

  const handleOnClick = (event) => {
    // console.log("On Change Clicked!");
    setText(event.target.value)
  }
  const clearText = () => {
    if (text === "") {
      // alert("Nothing to Clear!")
    }
    setText("")
    props.set_alert("Text Cleared", "success")
  }

  const word_count = () => {
    let words, wordsArr, word_count;
    words = text.split(" "); // spliting the string upon spaces like before
    wordsArr = Array.from(words) // converting that string to Array
    word_count = wordsArr.filter(word => word !== "").length; // Filtering the Array (empty excluded) -- not getting count of empty words
    return word_count;
  }


  function toSentenceCase(str){
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
  }
  const handleSentenceCase = () => {
    // first we lower case the words then after (dot). we capitalize first chartacter of first word
    let lower_case, temp, output_str;

    lower_case = text.toLowerCase()
    // console.log(`Lower Case: ${lower_case}`); 
    temp = lower_case.split(". ")
    // console.log("Splitted by dot: ", temp, "Type: ", typeof(temp))

    for(let i = 0; i < temp.length; i++) {
      // console.log(temp[i]);
      temp[i] = toSentenceCase(temp[i])
    }
    output_str = temp.join(". ")
    setText(output_str)
    // console.log(output_str);
    props.set_alert("Converted to Sentence Case", "success")
  }

  const handleTitleCase = () => {
    let temp, output_str;
    temp = text.split(" ")
    for (let i = 0; i < temp.length; i++)
    {
        temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1).toLowerCase()
        // console.log(temp[i])  
    }
    output_str = temp.join(" ")
    // console.log("Final Output:", output_str);
    setText(output_str)
    props.set_alert("Converted to Title Case", "success")
  }
  const copyToClipboard = () => {
    let text_box = document.getElementById("textBox")
    text_box.select()
    navigator.clipboard.writeText(text_box.value)
    // alert_div.innerHTML = [
    //   `<div class="alert alert-success alert-dismissible" role="alert">`,
    //   `   <div>Success: Text Copied to Clipboard!</div>`,
    //   '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    //   '</div>'
    // ].join('')
    props.set_alert("Copied to Clipboard", "success")
  }

  const handleExtraSpaces = () => {
    let tempText = text.split(/[ ]+/) //using regix to say that evalute the empty spcaes btw text, split them and then join them on single spaces
    setText(tempText.join(' '))
    props.set_alert("Extra Spaces Removed", "success")
  }

  const [text, setText] = useState("")
  // we have "Enter Text (STATE)" in our variable text, that can be updated using function of setText
  // text has current state as "Enter Text (STATE)" || will be changed by using function setText
  return (
    <div>
      <h1 className='my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
      {/* <div id='alert'></div>   */}
      <div className="mb-3">
        <textarea style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} className="form-control" value={text} onChange={handleOnClick} id="textBox" rows="9"></textarea>
      </div>
      <div className="d-flex flex-wrap">
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleTitleCase}>Title Case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleSentenceCase}>Sentence Case</button>
        <button className="btn btn-warning mx-2 my-2" onClick={copyToClipboard}>Copy Text</button>
        <button className="btn btn-warning mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-2 my-2" onClick={clearText}>Clear Text</button>
      </div>

      <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Text Summary</h2>
        <p>{word_count()} Words, {text.length} Characters</p>
        <p>{0.008 * word_count()} Minutes to Read</p>
      </div>
      <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Text Preview</h2>
        <p>{text.length === 0 ? 'Please Enter Text to Preview it here' : text}</p>
      </div>
    </div>
  )
}

Textbox.propTypes = {
  heading: PropTypes.string.isRequired
}

Textbox.defaultProps = {
  heading : "Enter your text to analyze below:"
}
// ============ STATES =============
// 1. we will make a new-Component (Textbox)
// 2. Now we make some buttons; upon click some method/action will be fired 
// If we type some text in the text box it will have a state of it's own
// To use state we use hooks
// {useState} -- is a hook
// Hooks are functions that let you “hook into” React state and lifecycle features from function components.
// We update states through usage of functions
// == Updation of State == 
// setText = "abc" -- Wrong Way
// setText("abc") -- Correct Way

// ========== END-SATES ============