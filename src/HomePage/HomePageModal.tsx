import { Modal, ModalDialog, ModalClose, Button, Stack } from '@mui/joy'
import { useHomePageContext } from "../Hooks/HomePageContext"

interface HomePageModalProps{
    dispatchType: "Submit Allergen" | "Submit Food Type" | "Submit Ingredient"
    inputSelections: React.ReactElement[]
    show: boolean,
    setShow: (show: boolean)=>void
}

const HomePageModal = ({dispatchType, inputSelections, show, setShow}:HomePageModalProps) =>{
    const {dispatch} = useHomePageContext()

    return <Modal open={show} onClose={() => setShow(false)}>
    <ModalDialog>
      <ModalClose />
      <form onSubmit={async (event) => {
        event.preventDefault()
        dispatch({ type: dispatchType })
        setShow(false)
      }}>
        <Stack spacing={1.1}>
        {inputSelections}
        <Button type='submit'>Submit</Button>
        </Stack>
      </form>
    </ModalDialog>
  </Modal>
}
export default HomePageModal