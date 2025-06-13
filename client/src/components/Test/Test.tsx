import './Test.css'

const Test = () => {
  return (
    <div className="test">
      <div className="container">
        <div className="test__inner">
          <div className="test__content">
            <h1>Practical courses for all levels</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem optio et fugiat beatae eligendi culpa hic perferendis quos consequatur!</p>
          </div>

          <div className="test__image">
            <iframe 
              src="https://lottie.host/embed/eae13419-43e5-4312-9dac-13af654f1c20/xeA7RHjeoG.lottie"
              frameBorder={0}
              width={500}
              height={500}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test