import React from 'react';

function Header({spotify}) {
  return (
    <div className='flex '>
      <div className="flex items-center w-4/5 ml-4">
        <div className="p-2">
          <input className="border rounded-xl text-white p-2 w-80" type="text" placeholder="Search For Songs" style={{ backgroundColor: "#121212"}} />
        </div>
        <div className="p-2 size-14">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2ZzUuUURSHXzdlNAURoW41ym2boIVfiX9BSy2iQAz8H5JaqO3dZxBESx382NaiD21Z1qZNu8yVUc0YPXHxQLfT9TYznjvzTr0PDAwD7/mdw33PPR+TZQUF+QPoAW4CD4BXwCegKp9tYBNYBG4A3VneAIaBMvCd2tkDloHBPARwFljj8KwAfa0K4hrwGTt2gYlmB3En4tAbYBYYBc4Dx+XTL7/NAVuR52eaFcTdAxx4AYzUYecS8LQlwbD/OmkqwCTQ0YC9DmBKbGjGUya2zgl3vQ4Y2B4EdgI502vj/e9i+naqWATh2R+SeuNTtrLv1wnNpKnIvs6tgM6ApYArdj7PG8mJGnPmpdJasmw7XBX2GTIxHtYbUVp7QJeFYdc7+bw28Tiu+VZpXrcw6hpAn1kTb+Oa80rzvoVR18X6jJp4G9ccU5obFkZdrfA5Z+JtXNO1Nj4fLYzqqlsy8TauWVKa31IEcsLE27jmSaW5+6+8Wu8tjG7mINmfWRh1M7bPnIm3cc17SnMhRUHcMvE2rvlOaV6xMNodaFGGTTwO67kp0qcCnLYy7rYdehpM1TTqnFy0FHCDj2bKTOCXznRA54K1iFvZ+FQtd1LS9erB6qGVfV+oT8ZPnx2Lll4GNz3qus3kGRvv/xScCBx9VSa7RpcP04GTcDwBjiQJRMRnCLMBXK7zdtKJrVkBOlsRDDIUzUt17pcGsCTfx6TY6ToRYyn1yYwHciYVy8DRlMH0BhYT9fIDeAystzQYh1vZyCugO4AYX4FHwEWx0Qms/uWZcvJgxJkutyhwM7Yk/7a0GF+AD7LqWQCuAqcCz+cnmMPiEjvQEmlWk95mTQ5mrQim2fAfnsw6cCzLO9R2mzX3/8dEJ3M7aycIB9NeQRwQTHsGoXImzZ+lBQVZlJ/po/gO7uhxQgAAAABJRU5ErkJggg=="/>
        </div>
      </div>
      <div className="flex items-center">
        <div className="p-2">
          <img src="https://th.bing.com/th?id=OIP.6TaP3MvApTZKVxzuiMtVPwHaHb&w=249&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Avatar" className="w-10 h-10 rounded-full" />
        </div>
        <div className="p-2">
          <h1 className="text-lg font-bold">Username</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
