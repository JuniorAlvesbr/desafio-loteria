export default function ColorBar({ color }) {
  return (
    <>
      <div id="mobile" className='absolute top-0 -z-10 sm:hidden'>
        <svg width="524" height="380" viewBox="0 0 524 570" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M871.477 569.828C871.477 569.828 306.227 281.609 -347 569.828V-132L871.477 -132V569.828Z"
            fill={color || '#6BEFA3'} />
        </svg>
      </div>

      <div id="desktop" className='absolute top-0 -z-10 -translate-y-28 hidden sm:block'>
        <svg width="613" height="1080" viewBox="0 0 613 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z" fill={color || '#6BEFA3'} />
        </svg>
      </div>
    </>
  )
}