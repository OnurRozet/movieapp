import Link from 'next/link';
import React from 'react'

const MenuItem = ({meta}) => {

  return (
    <div>
      <Link href={meta.url}>{meta.name}</Link>
    </div>
  )
}

export default MenuItem
