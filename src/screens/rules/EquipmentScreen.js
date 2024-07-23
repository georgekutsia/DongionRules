import React from 'react'
import { WeaponAbility, ShieldAbility, WeaponDistanceAbility, WeaponThrowAbility } from '../../component'


function EquipmentScreen() {
  
  return (
    <div data-aos="fade-in">
      <WeaponAbility/>
      <ShieldAbility/>
      <WeaponDistanceAbility/>
      <WeaponThrowAbility/>
    </div>
  )
}

export default EquipmentScreen