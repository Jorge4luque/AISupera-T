# 🚀 Despliegue en Vercel + GitHub

## Pasos para desplegar

### 1. Subir a GitHub
```bash
# Inicializar git si no está hecho
git init
git add .
git commit -m "Initial commit: AI Supera-T landing page"

# Crear repo en GitHub y conectar
git remote add origin https://github.com/tu-usuario/ai-supera-t.git
git branch -M main
git push -u origin main
```

### 2. Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con GitHub
3. Click "New Project"
4. Importa tu repositorio `ai-supera-t`
5. Vercel detectará automáticamente que es un proyecto Vite

### 3. Configurar Variables de Entorno
En Vercel Dashboard → Project Settings → Environment Variables:

```
SMTP_HOST = smtp.hostinger.com
SMTP_PORT = 465
SMTP_SECURE = true
SMTP_USER = ai@supera-t.es
SMTP_PASS = tu_contraseña_del_buzon_hostinger
TO_EMAIL = ai@supera-t.es
```

### 4. Desplegar
- Vercel hará el deploy automáticamente
- Te dará una URL como: `https://ai-supera-t.vercel.app`

### 5. Configurar CNAME en Hostinger
En tu panel de Hostinger:
1. Ve a DNS Zone
2. Añade un registro CNAME:
   - **Name:** `contacto` (o el subdominio que quieras)
   - **Value:** `ai-supera-t.vercel.app`
   - **TTL:** 3600

### 6. Resultado Final
- Tu web estará en: `https://contacto.tudominio.com`
- El formulario enviará emails a `ai@supera-t.es`
- Deploy automático cada vez que hagas push a GitHub

## Estructura del Proyecto
```
web-main/
├── api/
│   └── contact.ts          # Endpoint para envío de emails
├── src/
│   └── App.tsx            # Frontend React
├── vercel.json            # Configuración de Vercel
├── env.example            # Variables de entorno de ejemplo
└── package.json           # Dependencias
```

## Comandos Útiles
```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Troubleshooting

### Error de SMTP
- Verifica que las credenciales de Hostinger sean correctas
- Asegúrate de que el puerto 465 esté abierto
- Comprueba que `SMTP_SECURE = true`

### Error de CORS
- El endpoint ya tiene CORS configurado
- Si persiste, verifica que la URL del frontend coincida con el dominio

### Error de Variables de Entorno
- Verifica que todas las variables estén en Vercel
- Reinicia el deployment después de añadir variables
