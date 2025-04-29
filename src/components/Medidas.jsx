export default function Medidas({id="", title="Medidas", next="", children=null}){

    const setAncho = (e) => {
        const frame = document.getElementById(`frame_${id}`)
        const frame_ancho = document.getElementById(`frame_ancho_${id}`)
        const x = document.getElementById(`x_${id}`)
        const input = e.target

        let ancho = parseInt(input.value) * 80
        if(ancho >= 10){
            ancho = parseInt(input.value) * 40
        }
        
        frame.style.width = `${ancho}px`
        frame_ancho.style.width = `${ancho}px`
        x.innerText = `${parseInt(input.value)}`
        if(!input.value){
            x.innerText = `?`
        }
    }

    const setAlto = (e) => {
        const frame = document.getElementById(`frame_${id}`)
        const frame_alto = document.getElementById(`frame_alto_${id}`)
        const y = document.getElementById(`y_${id}`)
        const input = e.target

        let alto = parseInt(input.value) * 80
        if(alto >= 10){
            alto = parseInt(input.value) * 40
        }
        
        frame.style.height = `${alto}px`
        frame_alto.style.height = `${alto}px`
        y.innerText = `${parseInt(input.value)}`
        if(!input.value){
            y.innerText = `?`
        }
    }

    const handleSubmit = (e) => {
        const button = e.target

        const w = document.getElementById(`ancho_${id}`)
        const h = document.getElementById(`alto_${id}`)

        if(!w.value || !h.value){
            e.preventDefault()
            return
        }
        if(w.value <= 0 || h.value <= 0){
            e.preventDefault()
            return
        }
        if(button.name){
            e.preventDefault()
            const target = document.getElementById(button.name)
            if(target){
                target.scrollIntoView({behavior: "smooth"})
            }
            return
        }
    }

    const backToTop = (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return(
        <div id={id} class="w-full h-full flex items-center gap-x-5 font-semibold">
            <div class="w-1/3 flex justify-center">
                <form class="w-10/12">
                    <h1 class="text-3xl mb-10">{title}</h1>
                    <input id={`ancho_${id}`} name="ancho" onInput={setAncho} type="number" placeholder="Ingrese Ancho" class="w-full mt-5 text-lg outline-none border p-5 rounded-3xl border-neutral-400" />
                    <input id={`alto_${id}`} name="alto" onInput={setAlto} type="number" placeholder="Ingrese Alto" class="w-full mt-5 mb-10 text-lg outline-none border p-5 rounded-3xl border-neutral-400" />
                    {next.length > 0 ?(
                        <button id={`submit_${id}`} name={next} onClick={handleSubmit} class="w-full cursor-pointer text-lg outline-none border p-3 rounded-full text-white bg-[rgb(90,110,213)] hover:scale-105 hover:shadow-md transition-all duration-200">Continuar</button>
                    ) : (
                        <div>
                            <button id={`back_${id}`} onClick={backToTop} class="w-full cursor-pointer text-lg outline-none border mb-2 p-3 rounded-full text-white bg-[rgb(235,207,77)] hover:scale-105 hover:shadow-md transition-all duration-200">Volver</button>
                            {children}
                        </div>
                    )}
                </form>
            </div>
            <div class="w-2/3 h-full flex justify-center items-center pt-20 py-10">
                <div class="w-full h-10/12 bg-neutral-200 rounded-xl flex items-center justify-center overflow-hidden shadow-inner">
                    <div id={`frame_alto_${id}`} class="w-5 h-0 overflow-hidden border-y border-black me-2 flex transition-all duration-200">
                        <div class="w-1/2 border-e border-black flex items-center indent-1">
                            <p id={`y_${id}`} class="bg-neutral-200 font-normal">?</p>
                        </div>
                    </div>
                    <div id={`frame_${id}`} class={`w-0 h-0 rounded-lg shadow-md bg-[rgb(90,110,213)] transition-all duration-200`}>
                        <div id={`frame_ancho_${id}`} class="w-0 h-5 overflow-hidden border-x border-black me-2 flex -mt-8 transition-all duration-200">
                            <div class="w-full h-1/2 border-b border-black flex items-center justify-center">
                                <p id={`x_${id}`} class="bg-neutral-200 w-5 text-center font-normal mt-2">?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}