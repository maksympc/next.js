import Link from 'next/link'

export default function Nav() {
  return (
    <ul>
      <li>
        <Link href={'/first'} id="first">
          First
        </Link>
      </li>
      <li>
        <Link href={'/first-client'} id="first-client">
          First client
        </Link>
      </li>
      <li>
        <Link href={'/second'} id="second">
          Second
        </Link>
      </li>
      <li>
        <Link href={'/second-client'} id="second-client">
          Second client
        </Link>
      </li>
      <li>
        <Link href={'/third'} id="third">
          Third
        </Link>
      </li>
      <li>
        <Link href={'/interleaved/a'} id="interleaved-a">
          Interleaved A
        </Link>
      </li>
      <li>
        <Link href={'/interleaved/b'} id="interleaved-b">
          Interleaved B
        </Link>
      </li>
      <li>
        <Link href={'/reversed/a'} id="reversed-a">
          Reversed A
        </Link>
      </li>
      <li>
        <Link href={'/reversed/b'} id="reversed-b">
          Reversed B
        </Link>
      </li>
    </ul>
  )
}
