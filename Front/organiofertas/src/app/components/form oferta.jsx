"use client"

export default function FormOfertas() {
const handleSubmit = () => {}
    return (
        <>
        <h2>Crear Nuevo Curso</h2>
          <form onSubmit={handleSubmit}>
            <label>
             
                <div >
                  Titulo:
                  <input
                    type="text"
                    name="Title"
                    minLength="5"
                    maxLength="100"
                    placeholder="Insertar Título"
                    required
                    // value={formData.Title}
                    // onChange={handleInputChange}
                  />
                </div>
            </label>
            <br />
            <label>
              <div>
                <div>
                  Descripción:
                  <textarea
                    name="Description"
                    minLength="5"
                    maxLength="500"
                    placeholder="Insertar Descripción"
                    // value={formData.Description}
                    // onChange={handleInputChange}
                    rows="10"
                    cols="65"
                    required></textarea>                  
                </div>              
              </div>
            </label>
            <br />
            <label>Categorias: </label>
            <br />
            <label>
              Duración:
              <input
                type="number"
                name="Duration"
                // value={formData.Duration}
                // onChange={handleInputChange}
                min={30}
                max={150}
                required
              />
            </label>
        </form>
    </>
    )



}