import React from 'react'
import VolumeBar from './VolumeBar'

function Box3() {
  return (
    <div className='flex items-center justify-center p-8  '>
        <div className="playlist transform transition duration-300 hover:scale-110">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABH0lEQVR4nO3VPUoDQRiH8W2CIIJWgjmCvYX23sDWA1iIdtp5gRR2NjZBsPIQkg/QypSiCFp5gIBIEH8SmcAGk80mm1kQ8rTzzvvMx3+YJFlQFmjhDjtliwd84wrVOfVdwjaOcI0XPI8SD+jipD9xBtk6arhHb0RvWeIB7TBelU0z1as5odY8xY1Ur68i4i5OZzzqSXSihGuE6CO8mhr2sJIuboUwFH5OKeEhtlDJO3ED9bD7vKTDNXyPU6z4xvQ0CouLshDnBu0Z7ngu4Wr+u3ChUroYm7gsRYxVnIV/dogY4aqn/t3HcUUxwrUb6i4yanpTi/OC9wzxWxILfGaIb2OKHzLExzHF+2OkHSxHE/fBAZ7Csb/iHGu/gwuSv/wAvfIgisA/jbEAAAAASUVORK5CYII="/>
        </div>
        <div className="Volume size-8 ml-6 transform transition duration-300 hover:scale-110">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsklEQVR4nO2ZTWxNQRTHRyktsSGxQO0JawmplChlI1Y2YiHRWIhFRYSEla7aJlhIxK5aVgRrCxKWrAQRQkt8NEVCROrrJ6OnyTxv7p2Z+wYzyfvv3jvn3Dm/N3NnzpmnVFNN5SNgNnAMeA58AM4CrSonAXOBq9SrX2UGcU0SnwA2A2vl87jKFGKNfN8i3/1QmS2niRkIw/5bKmeILECohXhrg0gehHqI1SW+aYIQAJEsCLW70xtglUdMKYg88wZwCeiInnQMCE+QhcCkuH0EdkVNPAaE79ICVgDXxfUncDRK4iUQr4GVgfHe7whwWB+eEnIgZJB24DTwHreCIUJBtIB9MivfgXXKR8AZD4DKEFV3LWBAwp4A83wC3knAlgL7uNjXhyRSBgIsAE4Ce/SKKFnO9yX0oPcgQFuBXU+xVktEkI3GuGNAV0HcDvF54RzfAyR4WXiA6Ip4L/BQTF+BrZa4WcBT8dmUHMgfneQ5o+BcbPHpF/tgsiDGr35bXE5Y7D1iu5U0iNi3i8s9i2252F7mALJEXD5bbG1i+5ITyCeLbX4RZMpL667F1pHF0pKX/Y64HLfYt4ntZurb73lj+11Usv0OpHog9gKPxDQFdDsOxK7US5RnQKejRBnzKVFmisYeR9G4ISJIuxSNu4sqW2qLRndfIr2Ij6x3VlVAPGMGJeyxbxmvD5xTxsxEh2mgsfqm745Dxwu+1/0bIMAh6Qy1eisn3cjVaCMgwDLj+bpn74uSeAnMlVAYF4icJ/pmBvljaGfUxAsGbQUuh8B4zsgIMAosjZqwY1D9C170hamya/1rmFEfmKRBDJgRF0zyIL4wWYAYMBeKYLIB0QLmyN8CNTBGhzelchH1u1mn0f09UDmJaZjhuioNjqjcxHRDtF/PAvAKGNJL73/n1VRTKly/AJ+DPjHyMBfwAAAAAElFTkSuQmCC"/>
        </div>
        <div className="volume">
            <VolumeBar />
        </div>
    </div>
  )
}

export default Box3