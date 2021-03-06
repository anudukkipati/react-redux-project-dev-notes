class NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]

  # GET /notes
  def index
    @notes = Note.all
    # options ={}
    # options[:include] = [:user]
    # render json: NoteSerializer.new(@notes, options)   #
    render json: @notes, include: [:user] 
  end

  # GET /notes/1
  def show
    
    render json: @note, include: [:user] #, only: [:name]
  end

  # POST /notes
  def create
   # byebug
   # @note = Note.new(note_params)
    @user = User.find_or_create_by(name: user_params[:name])
    @note = @user.notes.build(note_params)

    if @note.save
      render json: @note, include: [:user] ,   status: :created, location: @note
    else 
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notes/1
  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /notes/1
  def destroy
    @note.destroy
    render json: { notice: "Note has been deleted" }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end
    
    def user_params
      params.require(:user).permit(:name)
    end
    # Only allow a trusted parameter "white list" through.
    def note_params
      params.require(:note).permit(:title, :topic, :content, :url)#removed , :user_id from strong params
    end
end
