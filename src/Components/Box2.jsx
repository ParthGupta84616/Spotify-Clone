import React from 'react';

function Box2() {
  return (
    <div>
        <div className="upper flex items-center justify-center mt-6 ">
            <div className="shuffle mr-4 transform transition duration-300 hover:scale-110">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFklEQVR4nO3VQUrDQBTG8ezUA7ixPUVRewXr3it4FVt1r2cQ0YVH8Api8QoFdSV0Ifxk6FiG0IS01AlC/jAQMu/lm/dm5ktRdHT8J/CEgzaEAx84b0P4l/rq8bwMZY43XKFfk9PHdYwNOVXMcNZEOCW0bLQi/hSfNWLNhFOwgyM8xMQvDJL5QXwXuMdhyEnmU+6wX6wLbuMHXrEbR3gO3FTkNK+yipLQOI7lQipyNquyDIb4Lo1hkQNMkn0bZxEN4DIRnhQ50EarLa7WS6z0IjlcU+z9mVfLeZ0sqgztfWxgIMFkjjc2ENWW+Y6TFfGjaKdNmDX16nncw3CFejWL7cXTPt34J7FN1mr1NslaZUrWKjs6ihI/GUDWBz2TNTUAAAAASUVORK5CYII="/>
            </div>
            <div className="previous mr-4 transform transition duration-300 hover:scale-110">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO2ZOw4BURSGTzQqjdoGLEONCIl1WIRItLZgC2qPxC7UqDEqhU8mUQiFM8zjzM35+pk/X/77OMkVcRznJ4AesAGuFM8VWAPdpBJT7DJJ0oR1OhqReDlZZ6URibDPRSNSCsRFjCHeiDHEGwm9Efn/+D4CwzKL3IE5UE8j94N/f6j8bAe00szNW+T2nKyraefmKbIFmlnl5iFyAkZAJcvcrEUWQOMzpTwiB2CgEbAsMgNqSSRcJONGgllaQW324I7foC7E4EaUoIbG4Mb4V/ZAn6JFikJcxBjijRhDvJESNhJhn7NGJH49tc5SI9LFPu2vIk+ZCXYZqyReZDrx66mRPRPFy0ndhOM48s4DLA5iG9kj/gkAAAAASUVORK5CYII="/>
            </div>
            <div className="play mr-4 transform transition duration-300 hover:scale-110">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaElEQVR4nO2av08UURDHFwoBEwkQBWKDBX8A/wAdkRA1WoIk/AcEYmVpK1BAMBJaS0uEgK3VxZhQKcdBhdAQsLEQlPAhk7zAy2V33X0/dt9d+CSXbHK3M/u9Nzs7M2+j6JYmBegGXgDzwAZQBX4B5+ojxzvqO/nNc6ArCgGgDZgEPgMX5EfO2QReiq2oBAEdwCvgCHccArNAe1EixoB9/LEHjPoOoyWK44OsvGsRfcA3iucr0OtKxCO13GVRk2uwFfFApdGy2Qf6TUW0lxROaWGWP0UDK4THskmKDZXHedLsLuGyl+mhqZ7YoTOTZTWkVDBlBPiOf36m3viqADRG+zNeA7/xy0SaEKlijamz9VCVGZf4YSOtnzApxa9JsDsMbOOef0BnnENpiqxIWelWYAo4xi1P45wt2FpNjNkbHz3Ae9uV15iLcyItqFchmq8h4IutP2AtznitKCHKX4tqcW3SfTXO8GmRQjS/d4E3wB8Dl8dxBs/LEKL5HwQ+5nR5FqqQTy6ENE1o7Tbgzb7T1Ol3vgEfiG+bukTparCi8W9s0aicbtlYLriMX0+LYckixhTcWI37bHWfuKjZMnAA3EkUosTIaD90plNFaKsSwpg0iVrmiaPsTxAmlzKpySRCE/OO8FjMJUILMRkch0Llvzd4ipj7AW0r9BmJqNvoKSKlJiFV+YCVCE1Mb0lhVpHNJiciYjZDfZUc9ax63XuX/QnPoVbNnWItV2dGTcVdlh3TZb0BIYImVHcps9i8yDnrUgAap1bXSG8APJMxppqGyAs0J9pLNXL8Q9pT6eykKQLuOb+QW6IwuAIQyG1DTYpTSQAAAABJRU5ErkJggg=="></img>
             </div>
            <div className="next mr-4 transform transition duration-300 hover:scale-110">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO3Zv0kEQRTA4TEw1NQGrMIS9A6xAduwADkwtQXr8F8RFiBiaKJ3YCJ8MuiCXOKcF+x753z5wv54s7PDbild1/0JjnGPhfEtcIfpqhEX4pqtMonoJi0hdTlFd9sSMhffW0tICqWHBFP6RIIpfSL/YCJTPK17I6OHlK9rdnGJj9QhAxzgIX1IhW2c4T11yAD7uE4fUmELp3hJHTLAHq7ShwxwiMf0IRV26lZdlvSQMSaSfmnJ/rDbhO1X9heiTTiiyH5otAnHeJzged0biRAyitJDgil9IsGUPpGEE5mL77UlpP49je6mJaR+Ao3u6NeQ75iZuM6bIn7ETOrf0yDPzLwup+ZJdF1Xln0C42dhEX4GgVEAAAAASUVORK5CYII="/>
            </div>
            <div className="repeat transform transition duration-300 hover:scale-110">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABB0lEQVR4nO3VPUrEQByG8RSuVuq6YCGeYAsPYrXgISwEbb2CtZ0XsbFT1g/YwkrxCoIWaqMWPxkykUUwJJmYxjz1vPNk/sy8ybKenprgDFtZ18j5xAnWuxYXPOMQi1WCS9jHNd60wx22y6SbuG1JVk0sP2khvccEy4mjforTG5QFDuakw7rCH+IPHGNUJXATQ5Om0rjPKcZ1Aq9RXHu8SeAC551Ke/4C+eW96lq6Gi/uS53QODyRRPFOFF9WWTyKJRDKQIJ0iIco3itbOIg1F+rumwbClXjSQjr7tTpDkcdCb5sZNsq+sk1xaMJpGG/pT2JOvoBdPKaMujFYwxHeOxW3+Zx6/idfK8KdxerXVWUAAAAASUVORK5CYII="/>
            </div>
        </div>
    </div>
  )
}

export default Box2;
