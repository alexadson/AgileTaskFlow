// Simulação de login simples
export function login() {
  const user = { name: 'admin', password: '123' };
  localStorage.setItem('user', JSON.stringify(user));
  console.log('Usuário logado:', user.name);
}
