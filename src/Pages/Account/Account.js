import {useForm, Controller} from 'react-hook-form';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button'
import {classNames} from 'primereact/utils';
import { Card } from 'primereact/card';
import './Account.css'
import './FreeDemo.css'

const Account = () => {
  const {handleSubmit, control, formState:{errors}} = useForm();
  const onSubmit = () => {

  }
  const getFormErrorMessage=(name) =>{
    return errors[name] && <small className='p-error'>{errors[name].message}</small>
  }
  return (
    <div className='account-div' style={{display:'flex' , direction: 'rtl', justifyContent:'center'}}>
        <div className='account'>
          <h2 style={{textAlign: 'center' , font: 'inherit' , fontSize: '180%' , marginBottom: '3rem'}}>حساب کاربری</h2>
            <div style={{display:'flex', flexDirection:'column'}}>
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                  <div className='field'>
                  <label htmlFor='name' className={classNames({'p-error':errors.name})} >*نام</label>
                    <span className='p-float-label'>
                          <Controller name="name" control={control} rules={{required:'Name Is required'}} render={({field, fieldState})=>(
                            <InputText id={field.name} {...field}/>
                          )}/>
                      </span>
                      {getFormErrorMessage('name')}
                  </div>
                                
                  <div className='field'>
                  <label htmlFor='password' className={classNames({'p-error':errors.password})} >*گذرواژه</label>
                    <span className='p-float-label'>
                          <Controller name="password" control={control} rules={{required:'password Is required'}} render={({field, fieldState})=>(
                            <InputText type="password" id={field.password} {...field}/>
                          )}/>
                      </span>
                      {getFormErrorMessage('password')}
                  </div>
                  <div className='field'>
                  <label htmlFor='email' className={classNames({'p-error':errors.name})}>*ایمیل</label>
                    <span className='p-float-label'>
                          <Controller name="email" control={control} rules={{required:'Email Is required', pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Invalid email type. e.g. abc@email.com' }}} render={({field, fieldState})=>(
                            <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                          )}/>
                      </span>
                      {getFormErrorMessage('email')}
                  </div>
 
                  <br/>  
                <Button label="Submit" type="submit" className='p-button-primary'/>
                </form>
            </div>
        </div>
        </div>
  );
}

export default Account;
