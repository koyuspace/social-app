import ExpoModulesCore

public class Expokoyu.spaceVisibilityViewModule: Module {
  public func definition() -> ModuleDefinition {
    Name("Expokoyu.spaceVisibilityView")

    AsyncFunction("updateActiveViewAsync") {
      VisibilityViewManager.shared.updateActiveView()
    }

    View(VisibilityView.self) {
      Events([
        "onChangeStatus"
      ])

      Prop("enabled") { (view: VisibilityView, prop: Bool) in
        view.enabled = prop
      }
    }
  }
}
