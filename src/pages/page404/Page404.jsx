import React from 'react'
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to="/home"/>
    </div>
  )
}
