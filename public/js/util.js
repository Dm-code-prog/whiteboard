import { canvas } from "./global";
/**
 *
 * @param event
 * returns current (X, Y) position of the Mouse
 */
export const getMousePosition = (event) => {
    const rect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
    if (!rect) {
        console.log("can't get canvas rect");
        return {
            x: 0,
            y: 0,
        };
    }
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return {
        x,
        y,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJ1dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFJbEM7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBaUIsRUFBUyxFQUFFO0lBQ3pELE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxxQkFBcUIsRUFBRSxDQUFDO0lBQzdDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsT0FBTztZQUNMLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7U0FDTCxDQUFDO0tBQ0g7SUFDRCxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBRW5DLE9BQU87UUFDTCxDQUFDO1FBQ0QsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDLENBQUMifQ==