import React from 'react'

export default function Alert(props) {

  const cap_first_letter = (word) => {
    let temp = word.toLowerCase()
    return temp.charAt(0).toUpperCase() + temp.slice(1)
  }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{cap_first_letter(props.alert.type)}</strong> - {props.alert.msg}
      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
  // we do pops.alert && --> to run from the null bug of alert (will find alert as null and rest of thig will not be given) so we see that if it's null don't evaluate other thing in above code
}
