import { useState } from 'react';

// function LoginCard() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = () => {
//     // Handle login logic here
//   };

//   return (
//     <div className="max-w-md mx-auto -mt-36 bg-black rounded-xl overflow-hidden shadow-lg p-8">
//       <div className="mb-4 mt-5">
//         <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
//           <strong className='text-sm'>Email or Username</strong>
//         </label>
//         <input 
//           type="email" 
//           id="email" 
//           className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500 bg-black text-white" 
//           placeholder="Email or Username" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="password" className="block text-gray-300 font-semibold mb-2">
//           <strong className='text-sm'>Password</strong>
//         </label>
//         <div className="relative">
//           <input 
//             type={showPassword ? "text" : "password"} 
//             id="password" 
//             className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500 bg-black text-white" 
//             placeholder="Password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//           />
//           <span 
//             className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
//             onClick={togglePasswordVisibility}
//           >
//             {showPassword ? (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14V6a3 3 0 00-6 0v8a3 3 0 006 0z" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 15l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
//               </svg>
//             )}
//           </span>
//         </div>
//       </div>
//       <div className="mb-4 flex items-center mt-5">
//         <input 
//           type="checkbox" 
//           id="rememberMe" 
//           className="mr-2"
//           checked={rememberMe}
//           onChange={(e) => setRememberMe(e.target.checked)} 
//         />
//         <label htmlFor="rememberMe" className="text-gray-300">Remember Me</label>
//       </div>
//       <button 
//         className="bg-green-500 text-white font-semibold py-2 px-4 rounded-2xl hover:bg-red-600 focus:outline-none focus:bg-black w-full"
//         onClick={handleLogin}
//       >
//         Login
//       </button>
//       <h3 className='text-white text-center mt-5 mb-3'>Forgot your password?</h3>
//       <div className="max-w-md mx-auto h-px bg-gray-600"></div> 
//       <h3 className="text-white text-center mt-3 mb-5">Don't have an account? Sign up for Spotify</h3>
//     </div>
//   );
// }
function LoginCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const handleLogin = () => {
      // Handle login logic here
    };
  
    return (
      <div className="max-w-md mx-auto px-4">
        <div className="bg-black rounded-xl overflow-hidden shadow-lg p-8">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
              <strong className='text-sm'>Email or Username</strong>
            </label>
            <input 
              type="email" 
              id="email" 
              className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500 bg-black text-white" 
              placeholder="Email or Username" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300 font-semibold mb-2">
              <strong className='text-sm'>Password</strong>
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500 bg-black text-white" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <span 
                className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14V6a3 3 0 00-6 0v8a3 3 0 006 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 15l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                )}
              </span>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input 
              type="checkbox" 
              id="rememberMe" 
              className="mr-2"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            <label htmlFor="rememberMe" className="text-gray-700">Remember Me</label>
          </div>
          <button 
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-2xl hover:bg-red-600 focus:outline-none focus:bg-black w-full"
            onClick={handleLogin}
          >
            Login
          </button>
          <h3 className='text-white text-center mt-3 mb-2'>Forgot your password?</h3>
          <div className="max-w-md mx-auto h-px bg-gray-600 mb-2"></div> 
          <h3 className="text-white text-center mt-3 mb-5">Don't have an account? Sign up for Spotify</h3>
        </div>
      </div>
    );
  }
  
//   export default LoginCard;
  

export default LoginCard;
