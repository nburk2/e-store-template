
export class Category {

  constructor(
    public name: string,
    public label?: string,
    public searchable?: boolean
    ) {  }

    public setAttributes(params) {
      this.name = params.name.S
      if(params.label) {
         this.label = params.label.S
      } else {
        this.label = params.name.S
      }
      if(params.searchable) {
        this.searchable = params.searchable.BOOL
      }
    }

    public getAttributesMap() {
      return {
        label:{Action: "PUT", Value:this.label},
        searchable:{Action: "PUT", Value:this.searchable}
      }
    }

    public formErrors() {
        var errors = []
        if(this.name == "" || this.name == null) {
            errors.push("name cannot be empty")
        }
        return errors
    }
}
