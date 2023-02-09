export default function({ route, redirect }) {
  const f = route.fullPath
  if (f === '/') {
    // console.log(`1: to => /`)
    return
  }
  const r = f.replace(/([^/])\?/, '$1/?')
  if (f !== r) {
    // console.log(`2: to => ${r}`)
    return redirect(301, r)
  }
  if (f.match(/^[^#?]*?[^/]$/)) {
    // console.log(`3: to => ${f}/`)
    return redirect(301, `${f}/`)
  }
  // console.log(`4: to => ${f}`)
}
